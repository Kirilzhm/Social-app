import { useState, useRef, useEffect } from 'react';
import { profileStyleSvg } from '../../js/personpageStyle';
import { profileStyleBtn } from '../../js/settingStyle';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const CharacterInput = ({ length = 6 }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [values, setValues] = useState(Array(length).fill(''));
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    setIsButtonDisabled(values.some(value => value === ''));
  }, [values]);

  const handleChange = (index, e) => {
    const newValues = [...values];
    newValues[index] = e.target.value.slice(-1);
    setValues(newValues);

    if (e.target.value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    if (values.every(value => value !== '')) {
      alert(JSON.stringify(values.join(''), null, 2));
      navigate('/');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <label className="sr-only">Verify code</label>
      <div className="flex justify-center py-5">
        {values.map((val, i) => (
          <div key={i} className="relative flex">
            <input
              key={i}
              autoFocus={true}
              ref={el => (inputsRef.current[i] = el)}
              type="text"
              maxLength="1"
              value={val}
              onChange={e => handleChange(i, e)}
              onKeyDown={e => handleKeyDown(i, e)}
              className={clsx(
                'w-10 h-10 text-center border-2 border-[#030104] rounded-md text-[#090202] text-2xl',
                { 'mr-[45px]': i === 2, 'mr-[10px]': i !== values.length - 1 }
              )}
              style={{ fontSize: '32px', marginRight: i === 2 ? '45px' : '10px' }}
            />
            {i === 2 && (
              <div className="absolute right-[15px] top-1/2 transform -translate-y-1/2 h-[2px] w-3.5 bg-black"></div>
            )}
          </div>
        ))}
      </div>
      <button
        type="submit"
        style={{ marginTop: '40px' }}
        className={clsx(profileStyleBtn(), {
          'fill-[#c7afaf]': isButtonDisabled,
        })}
        disabled={isButtonDisabled}
        onClick={() => handleSubmit(values)}
      >
        <svg className={profileStyleSvg()}>
          <use href="./icons.svg#icon-checkmark"></use>
        </svg>
      </button>
    </div>
  );
};

export default CharacterInput;
