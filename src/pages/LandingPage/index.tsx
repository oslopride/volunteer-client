import React, {useEffect} from "react";
import Page from "../../components/Page/index";
import Feature from "../../components/Feature";
import FeatureGrid from "../../components/FeatureGrid";
import FeatureGridItem from "../../components/FeatureGridItem";
// @ts-ignore
import BlockContent from '@sanity/block-content-to-react';

interface WorkItem {
    _id: string,
    title: string,
    text: any
}

interface LandingPageProps {
    landingPageContent: {
        title: string,
        mainImage: string,
        mainText: string,
        workItems: Array<WorkItem>,
        belowTheFold: Array<object>
    },
    onLandingPageRetrieved: any
}

const LandingPage = (props: LandingPageProps) => {
    const pageHeader =
        {
            sectionTitle: "Frivillig",
            title: props.landingPageContent.title,
            image: props.landingPageContent.mainImage,
            body: <BlockContent blocks={props.landingPageContent.mainText}/>,
            primaryAction: {
                label: "Bli frivillig",
                to: "/signup"
            },
            secondaryAction: {
                label: "Les mer",
                to: "/"
            }
        };

    return <Page header={pageHeader}>
        <FeatureGrid>
            {props.landingPageContent.workItems.map(w =>
                <FeatureGridItem key={w._id} title={w.title}>
                    <BlockContent blocks={w.text}/>
                </FeatureGridItem>
            )}
        </FeatureGrid>
    </Page>
};

export default LandingPage