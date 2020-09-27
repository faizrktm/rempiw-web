import { Box, Text } from 'candi-ui';
import { useEffect, useRef } from 'react';
import { Copy } from 'react-feather';
import styled from 'styled-components';
import Clipboard from 'clipboard';

export default function Field({
  label,
  content,
  contentClipboard,
  ...rest
}) {
  const copyBtn = useRef();

  useEffect(() => {
    let clipboard;
    if (contentClipboard && copyBtn.current) {
      clipboard = new Clipboard(copyBtn.current);

      clipboard.on('success', () => {
        window.alert(`${contentClipboard} Tersalin`);
      });

      clipboard.on('error', () => {
        console.log('error happens');
      });
    }

    return () => {
      if (clipboard) {
        clipboard.destroy();
      }
    };
  }, []);
  return (
    <Box gap="xsmall" {...rest}>
      <Text size="xsmall" weight="300" color="black300">{label}</Text>
      <Box direction="row" align="center">
        <Text weight="500">
          {content}
        </Text>
        {contentClipboard && (
          <CopyBtn ref={copyBtn} data-clipboard-text={contentClipboard.toString()}>
            <Copy color="black" size={18} />
          </CopyBtn>
        )}
      </Box>
    </Box>
  );
}

const CopyBtn = styled.button`
  cursor: pointer;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
`;
