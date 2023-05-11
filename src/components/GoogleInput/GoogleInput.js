import { useRef, useState } from 'react';

import styles from './GoogleInput.module.css';

export default function GoogleInput({
  icon = null,
  label,
  supportingText,
  cancel
}) {
  const inputContainerRef = useRef(null);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState('');
  return (
    <div className={styles.container}>
      <div
        className={`${styles.input_container} ${
          isFocused ? styles.focused : styles.hover
        }`}
        ref={inputContainerRef}
        onClick={() => inputRef.current.focus()}
        style={{
          padding:
            isFocused && icon !== null
              ? '0 0.75rem'
              : !isFocused && icon !== null
              ? '0 1rem 0 0.75rem'
              : isFocused && icon === null
              ? '0 1rem'
              : isFocused && icon === null && '0 1rem 0 1rem'
        }}
      >
        <div
          className={`${styles.label} ${
            isFocused ? styles.focused : inputText !== '' && styles.filled
          }`}
          style={{
            top: isFocused ? '-10px' : inputText !== '' ? '-10px' : `16px`,
            left: icon === null ? '1rem' : '3.25rem'
          }}
        >
          {label}
        </div>
        <div
          className={`${styles.square} ${
            (isFocused || inputText !== '') && styles.focused
          }`}
        >
          {label}
        </div>
        {icon !== null && (
          <span className={`material-symbols-outlined ${styles.icons}`}>
            {icon}
          </span>
        )}
        <input
          type="text"
          className={styles.input}
          ref={inputRef}
          value={inputText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onInput={(e) => setInputText(e.target.value)}
        />
        {isFocused && cancel && (
          <span
            className={`material-symbols-outlined ${styles.icons} ${styles.cancel}`}
            onClick={() => setIsFocused(false)}
          >
            cancel
          </span>
        )}
      </div>
      {supportingText && (
        <p className={`${styles.supporting_text}`}>{supportingText}</p>
      )}
    </div>
  );
}
