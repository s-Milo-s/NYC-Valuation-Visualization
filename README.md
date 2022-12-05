##This the code to visulize data onto a map and focus's on NYC valuations of the last 9 years

##Valuation Data
-This used data pulled from DOF
-This dataset contained nearly 9 million rows and 40 columns, containing data from 2010/11 to 2018/19. Each row contained data about each building for each year thus, for a given building, there would be nine rows. In each row, I choose to focus on five different data points. A building BBLE (Individual Building Identification number), BLDGCL (Building class), FULLVAL (Valuation), YEAR (date of valuation), POSTCODE (Zip code).

##Polygon Data

- This data contains a list of coordinates or a polygon used for redering zip codes on the map. This data was taken from
  https://github.com/fedhere/PUI2015_EC/blob/master/mam1612_EC/nyc-zip-code-tabulation-areas-polygons.geojson

##Technologies used

-MapReduce
-Map-box
-Deck.gl
-React
-MUI components

##Feel free to pull down data
