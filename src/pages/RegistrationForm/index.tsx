import React from "react";
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

const Body = styled.div`
  margin: 0 100px;
`;

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

    return <Page header={pageHeader}>
        <Body>
            <Step number={1} active={!hasUser} completed={hasUser}>
                <ExtendedProfile user={props.user}/>
            </Step>

            <Step number={2} active={hasUser}>
                <form>
                    <FormGroup disabled={!hasUser} title="Om deg">
                        <FormInput disabled={!hasUser} label="Fornavn" placeholder="Fornavnet du bruker"
                                   explanation="For bruk i kommunikasjon med deg og på navneskilt"/>
                        <FormInput disabled={!hasUser} label="Pronomen"
                                   placeholder="F.eks. de, hen, hun, han, annet"
                                   explanation="Pronomen du ønsker vi og andre skal bruke i kommunikasjon med deg, og ha tilgjengelig som navneskilt"/>
                        <FormInput disabled={!hasUser} required label="Folkeregistrert navn"
                                   placeholder="Fornavn Etternavn"
                                   explanation="Vi trenger folkeregistrert navn av hensyn til HMS og sikkerhet"/>
                        <FormInput disabled={!hasUser} required label="Fødelsedato" placeholder="01.01.2000"
                                   explanation="Vi bruker din fødselsdato til alderskontroll"/>
                    </FormGroup>
                </form>
            </Step>
            <Step number={3} active={hasUser}>
                <Tabs disabled={!hasUser} title="Din rolle i Oslo Pride"
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
                                          <FormInput required label="T-skjortestørrelse" placeholder="XS / S / M / L / XL / XXL"
                                                     explanation="Størrelse på uniform"/>
                                          <FormInput required label="Hanskestørrelse"
                                                     placeholder="S / M / L"
                                                     explanation="Størrelse på uniform"/>
                                          <FormInput required label="Sertifiseringer" placeholder="Eks. Førerkort type B, EL, Førstehjelp..."
                                                     explanation="Førerkort, kurs eller andre sertifiseringer som kan være relevant"/>
                                          <FormInput required label="Er det vanskelig for deg å utføre fysisk tungt arbeid?"
                                                     placeholder="Ja / Nei"
                                                     explanation="Vi tar hensyn til behov, og bruker denne informasjonen til å sette sammen balanserte vaktplaner"/>
                                      </FormGroup>
                                      <FormGroup title="Arbeidsønsker">
                                          <FormInput required label="Hvor mye kan du jobbe som frivillig under festivalen?" placeholder="F.eks. 2-3 vakter"
                                                     explanation="Vi vil lage vaktplan som passer antallet vakter du oppgir her "/>
                                      </FormGroup>
                                      <FormGroup>
                                          <FormInput required label="Er det noen arenaer du er spesielt interessert i å jobbe på?"
                                                     placeholder="F.eks. Pride Park"
                                                     explanation="Du må regne med å få vakter over hele festivalen, men vi forsøker å imøtekomme ønsker."/>
                                      </FormGroup>
                                      <FormGroup title="Din tilgjengelighet">
                                          <AvailabilityCalendar fromDate={new Date(2020,6,1)} toDate={new Date(2020,7,1)} />
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
                                  </form>
                              },
                              {
                                  id: 3,
                                  icon: <FaIdCardAlt/>,
                                  title: "Helårsfrivillig",
                                  subtitle: "Jeg er allerede medlem av en faggruppe i Oslo Pride",
                                  content:
                                      <FormGroup title="Din rolle i Oslo Pride">
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

            <ButtonGroup>
                <Button>Send inn søknad</Button>
            </ButtonGroup>

        </Body>
    </Page>;
};

export default RegistrationForm;
