import { FC, memo } from 'react';
import Icon, { IconProps } from './Icon';

const RocketIcon: FC<IconProps> = memo(props => (
  <Icon {...props} viewBox="0 0 24 24">
    <path d="M2 16.92V21h4.08l11.81-11.81-4.08-4.08L2 16.92z" fill="#f59e42"/>
    <path d="M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#f59e42"/>
    <circle cx="7.5" cy="17.5" r="1.5" fill="#fbbf24"/>
    <path d="M3 21l3-3" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"/>
  </Icon>
));

export default RocketIcon; 