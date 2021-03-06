"""Time to play with Python dictionaries!
You're going to work on a dictionary that
stores cities by country and continent.
One is done for you - the city of Mountain 
View is in the USA, which is in North America.

You need to add the cities listed below by
modifying the structure.
Then, you should print out the values specified
by looking them up in the structure.

Cities to add:
Bangalore (India, Asia)
Atlanta (USA, North America)
Cairo (Egypt, Africa)
Shanghai (China, Asia)
"""

locations = {'North America': {'USA': ['Mountain View']}}

cities = {'Bangalore':['India', 'Asia'],
'Atlanta':['USA','North America'],'Cario':['Egypt','Africa'],'Shanghai':['China','Asia']}

def addCity(locations, city):
  for key, value in city.items():
    if locations.get(value[1]):
      print key, value
      if locations[value[1]].get(value[0]):
        locations[value[1]][value[0]].append(key)
      else:
        locations[value[1]] = value[0]:[key]}


    else:
      print key, value
      locations[value[1]] = {}
      print locations
      if locations[value[1]].get(value[0]):
        locations[value[1]][value[0]].append(key)   
      else:
        locations[value[1]] = {value[0]:[key]}

addCity(locations,cities)
print locations

"""
print 1
for i in locations['North America']['USA']:
  print i
print 2
for key, value in locations['Asia'].items():
  print key, value
"""

    

"""Print the following (using "print").
1. A list of all cities in the USA in
alphabetic order.
2. All cities in Asia, in alphabetic
order, next to the name of the country.
In your output, label each answer with a number
so it looks like this:
1
American City
American City
2
Asian City - Country
Asian City - Country"""