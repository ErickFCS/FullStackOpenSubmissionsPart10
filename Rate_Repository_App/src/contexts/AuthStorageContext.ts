import { createContext } from 'react';
import AuthStorage from '../../utils/authStorage';

const AuthStorageContext = createContext<AuthStorage>(null);

export default AuthStorageContext;