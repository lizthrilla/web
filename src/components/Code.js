import React, { useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Code = ({ codeString, language, ...props }) => {
  const [copied, setCopied] = useState(false)

  const languageMap = {
    'C#': 'cpp',
    js: 'javascript',
    HTML: 'html',
  }

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={languageMap[language] || language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" style={{ position: 'relative' }}>
          <CopyToClipboard text={codeString} onCopy={() => setCopied(true)}>
            <pre
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: 0,
                right: 0,
              }}
            >
              {copied ? 'COPIED!' : 'COPY'}
            </pre>
          </CopyToClipboard>
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

export default Code
