import styled from "styled-components";

const NameComponents = styled.td`
  border-bottom: 0.1rem solid #e1e1e1;
  padding: 1.2rem 1.5rem 1.2rem 1rem;
`;

const LinkComponent = styled.a`
  text-decoration: none;
`;
const Names = styled.p`
  margin-bottom: 0;
  color: #db7770;
  font-weight: 800;
`;
const NameDescriptions = styled.td`
  color: #666666;
  font-size: 1rem;
`;

const NameComponent: React.FC<{
  name: string;
  generation: number;
  link: string;
}> = (props) => {
  return (
    <NameComponents>
      <LinkComponent href={props.link}>
        <Names>{props.name}</Names>
        <NameDescriptions>{props.generation}기</NameDescriptions>
      </LinkComponent>
    </NameComponents>
  );
};

export default NameComponent;
