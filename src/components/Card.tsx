import { PropsWithChildren } from "react";
import * as C from "./Card.style";
import Button from "./Button";

type CardProps = PropsWithChildren<{
  title: string;
  align?: "center" | "left" | "right";
}>;

export default function Card(props: CardProps) {
  return (
    <C.Wrapper align={props.align || "left"}>
      <C.Title>{props.title}</C.Title>
      {props.children}
      <div>
        <Button>Ver mais</Button>
      </div>
    </C.Wrapper>
  );
}
