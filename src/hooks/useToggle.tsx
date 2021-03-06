import { useCallback, useState } from 'react';

const useToggle = (initialValue = true) => {
  const [value, setter] = useState<boolean>(initialValue);

  const Toggle = useCallback(() => {
    setter(!value);
  }, [value]);

  return [value, Toggle, setter] as const;
};

export default useToggle;
