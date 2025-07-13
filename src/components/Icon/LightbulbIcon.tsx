import { FC, memo } from 'react';
import Icon, { IconProps } from './Icon';

const LightbulbIcon: FC<IconProps> = memo(props => (
  <Icon {...props} viewBox="0 0 24 24">
    <path d="M12 2a7 7 0 0 0-7 7c0 2.61 1.28 4.5 2.36 5.77C8.7 16.1 9 16.7 9 17.5V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.5c0-.8.3-1.4 1.64-2.73C17.72 13.5 19 11.61 19 9a7 7 0 0 0-7-7zm-1 18a1 1 0 1 0 2 0h-2zm-2-2h6v1a3 3 0 0 1-6 0v-1zm1.5-2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V17h-3v-1.5z" fill="#fbbf24"/>
    <circle cx="12" cy="9" r="5" fill="#f59e42"/>
  </Icon>
));

export default LightbulbIcon; 