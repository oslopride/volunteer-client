import React, { useState } from "react";
import styled from "styled-components";

interface TabsProps {
    title: string,
    disabled?: boolean,
    tabs: Array<TabProps>
}

interface TabProps {
    id: number,
    content: any,
    icon: any
    title: string,
    subtitle: string,
    disabled?: boolean,
    isSelected?: boolean,
    onSelect?: any
}

const TabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TabContainer = styled.div`
  flex-basis: calc(25% - 20px);
  
  &:nth-child(1){
      flex-basis: calc(50% - 20px);
  }
  margin: 10px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  
  background-color: ${(props: any) => props.disabled ? "rgba(0,0,0,0.025)" : "none"};
  border: ${(props: any) => props.isSelected ? "1px solid #3a1b7b" : "none"};
  box-shadow: ${(props: any) => props.isSelected || props.disabled ? "none" : "0 1px 3px rgba(0,0,0,0.2)"};
  
  &:hover {
    box-shadow: ${(props: any) => props.disabled ? "none" : "0 1px 7px rgba(0,0,0,0.2)"};
  }
  
  & > svg {
      color: ${(props: any) => props.disabled ? "rgba(0,0,0,0.1)" : "black"};
  }
`;

const TabTitle = styled.h4`
  font-weight: ${(props: any) => props.isSelected ? "bold" : "normal"};
  margin: 5px 0;
  color: ${(props: any) => props.disabled ? "lightgray" : "black"};
`;

const TabSubtitle = styled.p`
  margin: 5px 0;
  font-size: 0.8em;
  color: ${(props: any) => props.disabled ? "lightgray" : "black"};
`;

const Tab = (props: TabProps) => {
    return <TabContainer disabled={props.disabled} onClick={props.disabled ? null : props.onSelect} isSelected={props.isSelected}>
        {props.icon}
        <TabTitle disabled={props.disabled} isSelected={props.isSelected}>{props.title}</TabTitle>
        <TabSubtitle disabled={props.disabled}>{props.subtitle}</TabSubtitle>
    </TabContainer>
};


const Headline = styled.h1`
  color: ${(props: {disabled?: boolean}) => props.disabled ? "lightgray" : "black"}
`;

const Tabs = (props: TabsProps) => {
    const [selectedItem, setSelectedItem] = useState(0);

    const selectedItemContent = selectedItem > 0 && props.tabs.find(t => t.id === selectedItem);

    return <div>
        <Headline disabled={props.disabled}>{props.title}</Headline>
        <TabsContainer>
            {props.tabs.map((t: TabProps) =>
                <Tab disabled={props.disabled} isSelected={selectedItem === t.id} onSelect={() => setSelectedItem(t.id)} {...t} />
            )}
        </TabsContainer>

        <div>
            {selectedItemContent && selectedItemContent.content}
        </div>

    </div>;
};

export default Tabs;