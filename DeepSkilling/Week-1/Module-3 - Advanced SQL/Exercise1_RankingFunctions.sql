USE RetailStore;
GO

SELECT *,
DENSE_RANK() OVER
(
    PARTITION BY Category
    ORDER BY Price DESC
) AS DenseRankNo
FROM Products;