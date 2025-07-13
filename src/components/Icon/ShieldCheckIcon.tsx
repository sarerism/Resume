import { FC, memo } from 'react';
import Icon, { IconProps } from './Icon';

const ShieldCheckIcon: FC<IconProps> = memo(props => (
  <Icon {...props} viewBox="0 0 24 24">
    <path
      d="M12 2C12.28 2 12.56 2.07 12.8 2.21L19.2 5.77C19.7 6.05 20 6.57 20 7.13V12.5C20 17.09 16.42 20.74 12.36 21.96C12.13 22.03 11.87 22.03 11.64 21.96C7.58 20.74 4 17.09 4 12.5V7.13C4 6.57 4.3 6.05 4.8 5.77L11.2 2.21C11.44 2.07 11.72 2 12 2ZM10.29 14.29L7.7 11.7C7.31 11.31 6.68 11.31 6.29 11.7C5.9 12.09 5.9 12.72 6.29 13.11L9.29 16.11C9.68 16.5 10.31 16.5 10.7 16.11L17.7 9.11C18.09 8.72 18.09 8.09 17.7 7.7C17.31 7.31 16.68 7.31 16.29 7.7L10.29 14.29Z"
      fill="currentColor"
    />
  </Icon>
));

export default ShieldCheckIcon; 