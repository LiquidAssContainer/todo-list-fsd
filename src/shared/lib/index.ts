import { RootStateOrAny, useDispatch } from 'react-redux';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';

// export type RootState = ReturnType<typeof store.getState>;

export type ThunkAppDispatch = ThunkDispatch<RootStateOrAny, void, Action>;

export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
