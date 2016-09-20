SELECT  b_sale.* ,
        ( SELECT    SUM(CAST(TotalAmount AS FLOAT))
          FROM      b_saleItems
          WHERE     b_saleItems.PINo = b_sale.PINo
        ) AS TotalAmount
FROM    b_sale
WHERE   b_sale.OrderType = 'WEB'
        AND b_sale.Entryby = 'elliot'
ORDER BY PINo DESC ,
        EntryDate DESC;
