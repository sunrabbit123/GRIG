import styled from "styled-components";

const Description = styled.a`
  color: #db7770;
`;

const HeaderLink: React.FC<{ text: string; link: string }> = (props) => {
  return (
    <>
      <Description href={props.link}>{props.text}</Description>
    </>
  );
};

export default HeaderLink;
