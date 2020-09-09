import Heading, { DocumentOutline } from '.';

export default {
  title: 'Core/Foundations/Heading',
  component: Heading,
};

export const Example = () => (
  <DocumentOutline>
    <Heading>This is Heading 1 with automatic document outline</Heading>
    <DocumentOutline>
      <Heading>This is Heading 2 with automatic document outline</Heading>
      <DocumentOutline>
        <Heading>This is Heading 3 with automatic document outline</Heading>
        <DocumentOutline>
          <Heading>This is Heading 4 with automatic document outline</Heading>
          <DocumentOutline>
            <Heading>This is Heading 5 with automatic document outline</Heading>
            <DocumentOutline>
              <Heading>This is Heading 6 with automatic document outline</Heading>
            </DocumentOutline>
          </DocumentOutline>
        </DocumentOutline>
      </DocumentOutline>
    </DocumentOutline>
  </DocumentOutline>
);
