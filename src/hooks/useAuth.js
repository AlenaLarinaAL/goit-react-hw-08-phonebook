import { useSelector } from 'react-redux';

import {
  selectIsLogIn,
  selectisRefreshing,
  selectUser,
} from 'store/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLogIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectisRefreshing);

  return {
    isLoggedIn,
    user,
    isRefreshing,
  };
};
