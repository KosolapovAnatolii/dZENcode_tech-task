import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { filterSlice } from "../../store/reducers/FilterSlice";

export const SearchInput = () => {
  const dispatch = useAppDispatch();

  const {
    query,
  } = useAppSelector(state => state.filterReducer);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterSlice.actions.setQuery(event.target.value))
  };

  return (
    <div className="flex-grow-1">
      <form action="">
        <input 
          type="text" 
          placeholder="Search"
          className="w-50"
          value={query}
          onChange={(event) => handleInput(event)}
        />
      </form>
    </div>
  );
}