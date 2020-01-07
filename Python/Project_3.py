#A program that asks for weight of a package and tells a customer which method of shipping is the cheapest and how much it will cost

cost_premium = 125.00

def cost_ground (weight, cost=0):
  if (weight <=2):
    return weight*1.5+20 
  elif (weight >2) and (weight<=6): 
    return weight*3+20
  elif (weight >6) and (weight<=10):
    return weight*4+20
  else:
    return weight*4.75+20
    return cost

def cost_drone (weight, cost=0):
  if (weight <=2):
    return weight*4.5 
  elif (weight >2) and (weight<=6): 
    return weight*9
  elif (weight >6) and (weight<=10):
    return weight*12
  else:
    return weight*14.25
    return cost

def cost_cheap (weight):
  if (cost_drone (weight, cost=0) < cost_ground (weight, cost=0)) and (cost_drone (weight, cost=0) < cost_premium):
    print ("To ship a package of: " + str (weight) + " lbs" + " The cheapeast method is by Drone at: " + str (cost_drone (weight, cost=0)) + " GBP" )
  if (cost_ground (weight, cost=0) < cost_drone (weight, cost=0)) and ( cost_ground (weight, cost=0) < cost_premium):
    print ("To ship a package of: " + str (weight) + " lbs" + " The cheapeast method is by Ground at: " + str (cost_ground (weight, cost=0)) + " GBP" )
  if (cost_premium < cost_ground (weight, cost=0)) and (cost_premium < cost_drone (weight, cost=0)):
    print ("To ship a package of: " + str (weight) + " lbs" + " The cheapeast method is by Premium at: " + str (cost_premium) + " GBP" )
    return weight
 
    
cost_cheap (4.8)