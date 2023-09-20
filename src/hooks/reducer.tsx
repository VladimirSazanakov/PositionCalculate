import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootSate } from '../state/state';
import type { TypedUseSelectorHook } from 'react-redux';

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector;
