import { ChangeEvent } from 'react';
import { ProductItem } from '../ProductItem';
import {  useAppDispatch, useAppSelector } from '../../store/hooks';
import { filterSlice } from '../../store/reducers/FilterSlice';
import { SortTypes } from '../../Types/Filter';
import { Loader } from '../Loader';

export const Products = () => {
  const {
    products,
    isLoading,
    error
  } = useAppSelector(state => state.productReducer);

  const {
    sort,
    query,
  } = useAppSelector(state => state.filterReducer);

  const dispatch = useAppDispatch();

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterSlice.actions.setSort(event.target.value as SortTypes))
  };

  const visibleProducts = products
    .filter(product => {
      switch(sort) {
        case SortTypes.Laptops:
          return product.type === SortTypes.Laptops;

        case SortTypes.Monitors:
          return product.type === SortTypes.Monitors;

        case SortTypes.Phones:
          return product.type === SortTypes.Phones;

        case SortTypes.All:
          return true;

        default:
          return true;
      }
    })
    .filter(product => {
      if(!query) {
        return product;
      }

      const lowerQuery = query.toLowerCase().trim();
      const lowwerTitle = product.title.toLowerCase();

      return lowwerTitle.includes(lowerQuery);
    });

  const uniqTypes = Array.from(new Set(products.map(product => product.type)));

  if(isLoading) {
    return <Loader />
  };

  if(error) {
    return <h3>Products downloaded with error</h3>
  };

  return (
    <section className="products flex-grow-1">
      <div className="products__head d-flex align-items-end">
        <h2 className="products__count">Продукты / {visibleProducts.length}</h2>
        <form className="products__filter">
          <label
            className="products__filter--label"
            htmlFor="type"
          >
            Тип:
          </label>
          <select
            className="products__filter--select"
            id="type"
            name="type"
            onChange={handleSelect}
          >
            <option value="All">All</option>
            {uniqTypes.map((type) => {
              return (
                <option key={type} value={type}>{type}</option>
              )
            })}
          </select>
        </form>
      </div>
      <div className="products__list">
        {visibleProducts.map(product =>
          <ProductItem key={product.id} product={product} />
        )}
      </div>
    </section>
  );
}