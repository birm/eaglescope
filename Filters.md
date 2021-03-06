# Filter Language
A filter is an object where the keys are the names of columns, and the values are objects describing the rules to filter that column on.
V1 supports four filter operations in each column:
- match: true if the value literally matches
- regex: true if the regex returns true
- less: true if the value is less
- greater: true if the value is greater.

Furthermore, using \_\_ALL as a column name searches all values in the record (and technically supports all of the above filter options), as may be useful for things like search bars.

These can be stacked, such as `height:{less:5,greater:1}` which returns all values between 1 and 5, noninclusive.

Records meet the filter if ALL filter rules are met.
