import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

type AccordionRootProps =
  | Accordion.AccordionSingleProps
  | Accordion.AccordionMultipleProps;

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  Accordion.AccordionContentProps
>(({ children, ...props }, ref) => {
  return (
    <Accordion.Content
      ref={ref}
      {...props}
    >
      {children}
    </Accordion.Content>
  );
});

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  Accordion.AccordionItemProps
>(({ children, ...props }, ref) => {
  return (
    <Accordion.Item
      ref={ref}
      {...props}
    >
      {children}
    </Accordion.Item>
  );
});

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  Accordion.AccordionTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <Accordion.Trigger
      ref={ref}
      {...props}
    >
      {children}
    </Accordion.Trigger>
  );
});

export const AccordionRoot = ({
  children,
  ...props
}: AccordionRootProps) => {
  return (
    <Accordion.Root
      {...props}
    >
      {children}
    </Accordion.Root>
  );
};

AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";
