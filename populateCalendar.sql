
	INSERT INTO `wfm_scheduler` (
		`user_id`,
		`datestamp`,
		`month_name`,
		`month_number`,
		`day_name`,
		`day_number`,
		`year`,
        `shift_id`,
        `requestedPto`)
		SELECT
			user_id as user_id
			,DATE
			,MONTHNAME(DATE)
			, MONTH(DATE)
			,DATE_FORMAT(DATE, '%a')
			,DAYOFMONTH(DATE)
			, YEAR(DATE)
            ,null as shift
            , null as requestedPto
		FROM
			-- Generate all possible dates for every year from 2001 to 2100.
			(SELECT
				DATE_ADD(CONCAT(YEAR, '-01-01'), INTERVAL INCREMENT DAY) DATE
				, INCREMENT
			FROM
				(SELECT
					(UNITS + TENS + HUNDREDS) INCREMENT
				FROM
					(SELECT 0 UNITS UNION
					SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION
					SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION
					SELECT 7 UNION SELECT 8 UNION SELECT 9) UNITS
				CROSS JOIN
					(SELECT 0 TENS UNION
					SELECT 10 UNION SELECT 20 UNION SELECT 30 UNION
					SELECT 40 UNION SELECT 50 UNION SELECT 60 UNION
					SELECT 70 UNION SELECT 80 UNION SELECT 90) TENS
				CROSS JOIN
					(SELECT 0 HUNDREDS UNION
					SELECT 100 UNION SELECT 200 UNION SELECT 300 UNION
					SELECT 400 UNION SELECT 500 UNION SELECT 600 UNION
					SELECT 700 UNION SELECT 800 UNION SELECT 900) HUNDREDS
				) INCREMENT
				-- For every year from 2001 to 2100, find the number of days in the year.
				, (SELECT
					YEAR
					, DAYOFYEAR(CONCAT(YEAR, '-12-31')) - DAYOFYEAR(CONCAT(YEAR, '-01-01')) + 1 DAYS
				FROM
					-- Generate years from 2001 to 2100.
					(SELECT
						(2000 + UNITS + TENS) YEAR
					FROM
						(SELECT 0 UNITS UNION
						SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION
						SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION
						SELECT 7 UNION SELECT 8 UNION SELECT 9) UNITS
					CROSS JOIN
						(SELECT 0 TENS UNION
						SELECT 10 UNION SELECT 20 UNION SELECT 30 UNION
						SELECT 40 UNION SELECT 50 UNION SELECT 60 UNION
						SELECT 70 UNION SELECT 80 UNION SELECT 90) TENS
					) YEAR
				WHERE
					YEAR BETWEEN 2020 AND 2021
				) YEAR
			  WHERE
				  INCREMENT BETWEEN 0 AND DAYS - 1
			  ORDER BY
				  YEAR
				  , INCREMENT) DATE;
END$$
DELIMITER ;

			
				  
          
          
          

