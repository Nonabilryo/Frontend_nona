import styled from "styled-components";

export const Base = styled.div`
height: 13vh;
display: flex;
justify-content: center;
border-bottom: 0.5px solid #C4C4C4;
`;

export const Ground = styled.div`
width: 90vw;
height: 13vh;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const LogoImg = styled.img`
width: 4.5vw;
margin-left: 2vw;
`;

export const ProfileImg = styled.img`
width: 2.5vw;
`;

export const ChatImg = styled.img`
width: 2.5vw;
`;

export const CommunityImg = styled.img`
width: 2.5vw;
`;

export const SearchBack = styled.div`
height: 6vh;
width: 50vw;
border: 3px solid #3BD15F;
border-radius: 5px;
display: flex;
`;

export const Search = styled.input`
padding-left: 15px;
width: 45vw;
border: none;
outline: none;
border-radius: 5px;
font-size: 15px;
`;

export const SearchButton = styled.button`
background: none;
border: none;
${SearchButton}:hover & {
    cursor: point;
}
`;

export const Icons = styled.div`
width: 16vw;
display: flex;
justify-content: space-between;
`