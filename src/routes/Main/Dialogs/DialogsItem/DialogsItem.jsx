import React from 'react';
import styled from 'styled-components';
import {Primary} from 'components/Block';
import {Avatar} from 'components/Image';
import {BriefTextBlock} from 'components/Block';
import {Text, Headline3} from 'components/Text';


const Wrapper = styled(Primary)`
flex-direction: row;
justify-content: flex-start;
padding-top: 20px;
padding-bottom: 20px;
border-bottom: 2px solid rgba(120, 109, 134, 0.2);
flex-wrap: nowrap;
 ${({theme: {colors}, isActive}) => {
     if (isActive)  return `
     color: ${colors.blue};
     `
}};

& h3{
margin-bottom: 10px;
cursor: pointer;
}
`;
const DialogsItem = ({ name = '', body = '', action, ...props}) => (
    <Wrapper {...props} onClick={action}>
        <Avatar showOnline/>
        <BriefTextBlock>
            <Headline3>
                {name}
            </Headline3>
            <Text>
                {body}
            </Text>
        </BriefTextBlock>
    </Wrapper>
);

export default React.memo(DialogsItem);
