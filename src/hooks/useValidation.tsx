import { useState, useCallback } from 'react';

interface Props {
  initialValue?: string;
  max: number;
  min: number;
}

const useValidation = ({ initialValue = '', max, min }: Props) => {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<boolean>(false);

  const onChange = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLTextAreaElement;
    const value = target.value;
    if (value.length > max) return setError(true);
    else if (value.length < min) setError(true);
    else setError(false);
    setValue(value);
  }, []);

  return [value, onChange, error] as const;
};

export default useValidation;
