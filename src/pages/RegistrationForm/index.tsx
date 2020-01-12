import React, {useState} from "react";
import styled from "styled-components";
import Page from "../../components/Page";
import ExtendedProfile from "../../components/ExtendedProfile";
import Step from "../../components/Step";
import FormGroup from "../../components/FormGroup";
import FormInput from "../../components/FormInput";
import Tabs from "../../components/Tabs";
import {Button} from "../../components/Button";
import {FaFistRaised, FaHandshake, FaIdCardAlt, FaMobile} from "react-icons/all";
import ButtonGroup from "../../components/ButtonGroup";
import FormSelect from "../../components/FormSelect";
import AvailabilityCalendar from "../../components/AvailabilityCalendar/index";
import {Formik} from "formik";
import * as Yup from 'yup';
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import ProfileSummary from "../../components/ProfileSummary";

const Body = styled.div`
  margin: 0 100px;
`;

const ProfileSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Minst to tegn')
        .max(20, 'Maks 20 tegn')
        .required('Må fylles ut'),
    pronoun: Yup.string()
        .min(2, 'Minst to tegn')
        .max(10, 'Maks 10 tegn')
        .required('Må fylles ut'),
    fullName: Yup.string()
        .min(5, 'Minst 5 tegn')
        .max(40, 'Maks 40 tegn')
        .required('Må fylles ut'),
    dateOfBirth: Yup.date()
        .min(new Date(1900, 1, 1), "Har du skrevet riktig dato?")
        .max(new Date(2015, 1, 1), "Aldersgrense 16 år")
        .required('Må fylles ut'),
});

const RegistrationForm = (props: any) => {
    const pageHeader =
        {
            color: "#f2f2f2",
            title: "Søknadskjema",
            sectionTitle: "Bli frivillig",
            inverted: true,
            short: true,
            body: <p>Registreringsskjema for frivillige, helårsfrivillige og samarbeidspartnere i Oslo Pride</p>
        };

    const hasUser = props.user !== undefined;

    const [hasProfile, setHasProfile] = useState(false);

    return <Page header={pageHeader}>
        <Body>
            <Step number={1} active={!hasUser} completed={hasUser}>
                <ExtendedProfile user={props.user}/>
            </Step>

            <Step number={2} active={hasUser && !hasProfile} completed={hasProfile}>
                {hasProfile ?
                    <ProfileSummary image="" name="Christian" page="34" email="email@email.com" emailVerified={true}
                                    phone="" phoneVerified={false}/> :
                    <Formik
                        initialValues={{firstName: '', pronoun: '', fullName: '', dateOfBirth: ''}}
                        validationSchema={ProfileSchema}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                setSubmitting(false);
                                setHasProfile(true);
                            }, 400);
                        }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                              /* and other goodies */
                          }) => (
                            <form onSubmit={handleSubmit}>
                                <FormGroup disabled={!hasUser || isSubmitting} title="Om deg">
                                    <FormInput name="firstName" value={values.firstName} onChange={handleChange}
                                               onBlur={handleBlur} disabled={!hasUser} label="Fornavn"
                                               placeholder="Fornavnet du bruker"
                                               hasError={touched.firstName && errors.firstName}
                                               explanation="For bruk i kommunikasjon med deg og på navneskilt"/>
                                    <FormInput name="pronoun" value={values.pronoun} onChange={handleChange}
                                               onBlur={handleBlur} disabled={!hasUser} label="Pronomen"
                                               placeholder="F.eks. de, hen, hun, han, annet"
                                               hasError={touched.pronoun && errors.pronoun}
                                               explanation="Pronomen du ønsker vi og andre skal bruke i kommunikasjon med deg, og ha tilgjengelig som navneskilt"/>
                                    <FormInput name="fullName" value={values.fullName} onChange={handleChange}
                                               onBlur={handleBlur} disabled={!hasUser} required
                                               label="Folkeregistrert navn"
                                               placeholder="Fornavn Etternavn"
                                               explanation="Vi trenger folkeregistrert navn av hensyn til HMS og sikkerhet"
                                               hasError={touched.fullName && errors.fullName}
                                    />
                                    <FormInput name="dateOfBirth" value={values.dateOfBirth} onChange={handleChange}
                                               onBlur={handleBlur} disabled={!hasUser} required label="Fødelsedato"
                                               placeholder="01.01.2000"
                                               type="date" hasError={touched.dateOfBirth && errors.dateOfBirth}
                                               explanation="Vi bruker din fødselsdato til alderskontroll"/>
                                </FormGroup>
                                { hasUser && !hasProfile &&
                                    <Button type="submit" disabled={isSubmitting}>Lagre profil</Button>
                                }
                            </form>
                        )}
                    </Formik>}
            </Step>
            <Step number={3} active={hasProfile}>
                <Tabs disabled={!hasProfile} title="Din rolle i Oslo Pride"
                      tabs={
                          [
                              {
                                  id: 1,
                                  icon: <FaFistRaised/>,
                                  title: "Frivillig",
                                  subtitle: "Jeg vil bidra som frivillig under årets pride",
                                  content: <form>
                                      <FormGroup title="Frivillig">
                                          <FormInput required label="Telefonnummer" placeholder="+47 123 12 123"
                                                     explanation="Vi trenger å kunne ringe deg eller sende deg SMS i forbindelse med vaktplanlegging og avvikling"/>
                                          <FormInput required label="Kontaktinformasjon nærmeste pårørende"
                                                     placeholder="Fullt navn og telefonnummer"
                                                     explanation="Vi trenger navn og telefonnummer på en person vi kan kontakte dersom noe skulle skje"/>
                                      </FormGroup>
                                      <FormGroup title="Praktisk informasjon">
                                          <FormInput required label="T-skjortestørrelse"
                                                     placeholder="XS / S / M / L / XL / XXL"
                                                     explanation="Størrelse på uniform"/>
                                          <FormInput required label="Hanskestørrelse"
                                                     placeholder="S / M / L"
                                                     explanation="Størrelse på uniform"/>
                                          <FormInput required label="Sertifiseringer"
                                                     placeholder="Eks. Førerkort type B, EL, Førstehjelp..."
                                                     explanation="Førerkort, kurs eller andre sertifiseringer som kan være relevant"/>
                                          <FormInput required
                                                     label="Er det vanskelig for deg å utføre fysisk tungt arbeid?"
                                                     placeholder="Ja / Nei"
                                                     explanation="Vi tar hensyn til behov, og bruker denne informasjonen til å sette sammen balanserte vaktplaner"/>
                                      </FormGroup>
                                      <FormGroup title="Arbeidsønsker">
                                          <FormInput required
                                                     label="Hvor mye kan du jobbe som frivillig under festivalen?"
                                                     placeholder="F.eks. 2-3 vakter"
                                                     explanation="Vi vil lage vaktplan som passer antallet vakter du oppgir her "/>
                                          <FormInput required
                                                     label="Er det noen arenaer du er spesielt interessert i å jobbe på?"
                                                     placeholder="F.eks. Pride Park"
                                                     explanation="Du må regne med å få vakter over hele festivalen, men vi forsøker å imøtekomme ønsker."/>
                                      </FormGroup>
                                      <FormGroup title="Din tilgjengelighet">
                                          <AvailabilityCalendar fromDate={new Date(2020, 6, 18)}
                                                                toDate={new Date(2020, 7, 5)}/>
                                      </FormGroup>
                                  </form>
                              },
                              {
                                  id: 2,
                                  icon: <FaHandshake/>,
                                  title: "Partner",
                                  subtitle: "Jeg tilhører en av Oslo Prides samarbeidspartnere",
                                  content: <form>
                                      <FormGroup title="Partner">
                                          <FormSelect required label="Velg organisasjonen du representerer"
                                                      placeholder="Organisasjonsnavn"
                                                      explanation="">
                                              <option>FRI OA</option>
                                              <option>Skeiv Ungdom</option>
                                              <option>Nordic Choice Hotels</option>
                                          </FormSelect>
                                      </FormGroup>
                                      <FormGroup title="Kontaktinformasjon">
                                          <FormInput required label="Telefonnummer" placeholder="+47 123 12 123"
                                                     explanation="Vi trenger å kunne ringe deg eller sende deg SMS i forbindelse med vaktplanlegging og avvikling"/>
                                          <FormInput required label="Kontaktinformasjon nærmeste pårørende"
                                                     placeholder="Fullt navn og telefonnummer"
                                                     explanation="Vi trenger navn og telefonnummer på en person vi kan kontakte dersom noe skulle skje"/>
                                      </FormGroup>
                                      <FormGroup title="Din tilgjengelighet">
                                          <AvailabilityCalendar fromDate={new Date(2020, 6, 18)}
                                                                toDate={new Date(2020, 7, 5)}/>
                                      </FormGroup>
                                  </form>
                              },
                              {
                                  id: 3,
                                  icon: <FaIdCardAlt/>,
                                  title: "Helårsfrivillig",
                                  subtitle: "Jeg er allerede medlem av en faggruppe i Oslo Pride",
                                  content:
                                      <FormGroup title="Kontaktinformasjon og organisasjonstilhørighet">
                                          <FormInput required label="Telefonnummer" placeholder="+47 123 12 123"
                                                     explanation="Vi trenger å kunne ringe deg eller sende deg SMS i forbindelse med vaktplanlegging og avvikling"/>
                                          <FormInput required label="Kontaktinformasjon nærmeste pårørende"
                                                     placeholder="Fullt navn og telefonnummer"
                                                     explanation="Vi trenger navn og telefonnummer på en person vi kan kontakte dersom noe skulle skje"/>
                                          <FormInput label="Tilhører du allerede en faggruppe?"
                                                     placeholder="F.eks. Teknologigruppa"
                                                     explanation="Dersom du helårsfrivillig og tilhørere en faggruppe kan du oppgi den her"/>
                                          <FormInput label="Rolle / Tittel"
                                                     placeholder="F.eks. Utvikler"
                                                     explanation="Dersom du er usikker på tittelen din kan du la det stå tomt"/>
                                      </FormGroup>
                              }
                          ]
                      }
                />
            </Step>

            {hasProfile &&
            <ButtonGroup>
                <Button>Send inn søknad</Button>
            </ButtonGroup>
            }

        </Body>
    </Page>;
};

export default RegistrationForm;
