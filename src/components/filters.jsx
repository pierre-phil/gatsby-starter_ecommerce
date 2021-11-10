import * as React from "react"
import { CheckFilter } from "./check-filter"
import { CurrencyField } from "./currency-field"
import {
  priceFilterStyle,
  clearButton,
  priceFields,
  summary,
} from "./filters.module.scss"

export function Filters({
  currencyCode,
  productTypes,
  tags,
  vendors,
  filters,
  setFilters,
}) {
  const updateFilter = (key, value) => {
    setFilters((filters) => ({ ...filters, [key]: value }))
  }

  const updateNumeric = (key, value) => {
    if (
      !isNaN(Number(value)) ||
      (value.endsWith(".") && !isNaN(Number(value.substring(0, -1))))
    ) {
      updateFilter(key, value)
    }
  }

  return (
    <>
      <CheckFilter
        name="Type"
        items={productTypes}
        selectedItems={filters.productTypes}
        setSelectedItems={(value) => updateFilter("productTypes", value)}
      />
      <hr />
      <details className={priceFilterStyle} open={true}>
        <summary>
          <div className={summary}>
            Prix
            {(filters.maxPrice || filters.minPrice) && (
              <button
                className={clearButton}
                onClick={() =>
                  setFilters((filters) => ({
                    ...filters,
                    maxPrice: "",
                    minPrice: "",
                  }))
                }
              >
                X
              </button>
            )}
          </div>
        </summary>
        <div className={priceFields}>
          De
          <CurrencyField
            {...currencyCode}
            aria-label="Prix minimum"
            value={filters.minPrice}
            onChange={(event) =>
              updateNumeric("minPrice", event.currentTarget.value)
            }
          />{" "}
          à{" "}
          <CurrencyField
            {...currencyCode}
            aria-label="Prix maximum"
            value={filters.maxPrice}
            onChange={(event) =>
              updateNumeric("maxPrice", event.currentTarget.value)
            }
          />
        </div>
      </details>
      {/*       <hr />
      <CheckFilter
        name="Marque"
        items={vendors}
        selectedItems={filters.vendors}
        setSelectedItems={(value) => updateFilter("vendors", value)}
      />
      <hr /> 
            <CheckFilter
        open={true}
        name="Tags"
        items={tags}
        selectedItems={filters.tags}
        setSelectedItems={(value) => updateFilter("tags", value)}
      /> */}
    </>
  )
}
