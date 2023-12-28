create or alter view RZ9VwContactAgeDays
as

select Id as RZ9Id, Name as RZ9Name, BirthDate as RZ9BirthDate,
datediff(day, BirthDate, getdate()) as RZ9AgeDays
from Contact