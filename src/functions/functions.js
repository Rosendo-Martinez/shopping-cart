import placeHolder from "../assets/placeholder.png";

/**
 * Returns data of shop items of given page.
 */
export function getShopData() {
  const cardsData = [
    {
      id: 1,
      title: "TITLE",
      description:
        "DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum pellentesque sem, sit amet sodales diam varius a.",
      image: placeHolder,
      cost: 6001,
      sold: 6,
    },
    {
      id: 2,
      title: "TITLE",
      description:
        "DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum pellentesque sem, sit amet sodales diam varius a.",
      image: placeHolder,
      cost: 34,
      sold: 5,
    },
    {
      id: 3,
      title: "TITLE",
      description:
        "DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum pellentesque sem, sit amet sodales diam varius a.",
      image: placeHolder,
      cost: 999,
      sold: 10,
    },
    {
      id: 4,
      title: "TITLE",
      description:
        "DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum pellentesque sem, sit amet sodales diam varius a.",
      image: placeHolder,
      cost: 256,
      sold: 3,
    },
  ];

  return cardsData;
}

/**
 * List of values of allowed sort by options.
 *
 * @returns {Object}
 */
export function getSortByValues() {
  const sortByValues = [
    "Price: low to high",
    "Price: high to low",
    "Alphabetically: A-Z",
    "Alphabetically: Z-A",
  ];

  return sortByValues;
}

export function getShopPageURLS() {
  return [
    "/shop/page/1?q=1",
    "/shop/page/2?q=1",
    "/shop/page/3?q=1",
    "/shop/page/4?q=1",
  ];
}
