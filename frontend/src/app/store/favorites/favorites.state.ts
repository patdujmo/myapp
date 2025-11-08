import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { EventData } from '../models/events';

export interface FavoritesState extends EntityState<EventData>{
  loading: boolean;
  error?: string;
}

export const favoritesAdapter = createEntityAdapter<EventData>();

export const initialFavoritesState: FavoritesState = favoritesAdapter.getInitialState({
  loading: false,
  error: undefined
});
