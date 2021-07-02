import { RootState } from './../reducers/index';

export const getMusicName = (state: RootState): string => state.reducerMusic.name;

export const getMusicCurrentTime = (state: RootState): number => state.reducerMusic.currentTime;

export const getMusicVisibleTime = (state: RootState): number => state.reducerMusic.visibleTime;

export const getMusicSrcAudio = (state: RootState): string => state.reducerMusic.srcAudio;

export const getMusicSrcImage = (state: RootState): string => state.reducerMusic.srcImage;

export const getMusicVolume = (state: RootState): number => state.reducerMusic.volume;

export const isPlayMusic = (state: RootState): boolean => state.reducerMusic.isPlay;
