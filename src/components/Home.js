import React from 'react'
import styled from 'styled-components';

const HomeTitle = styled.h2`
    font-size: 2rem;
`;

const Section = styled.section`
    padding: 2rem;
    margin: 2rem;
`;

export const Home = () => (
    <Section>
        <HomeTitle>Welcome to Holy Communion Anglican Church</HomeTitle>
        <p>This is a sample website for our church</p>
    </Section>
)