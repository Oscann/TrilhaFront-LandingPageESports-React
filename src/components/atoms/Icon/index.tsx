import styled from "styled-components";

interface IconProps {
  src: string;
  size: string;
  id?: string;
}

export default function Icon(props: IconProps) {
  return <IconDiv {...props} />;
}

const IconDiv = styled.div<IconProps>`
  background-image: url(${(props) => props.src});
  background-size: 100%;
  background-repeat: no-repeat;

  width: ${(props) => props.size};
  padding-bottom: ${(props) => props.size};
`;
