import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from flask_cors import CORS
import json
from flask import Flask, request, jsonify

app = Flask(__name__)
CORS(app)


# Set the number of samples for distribution
n = 1000

# Set the number of simulations
s = 1000


# Get porosity
@app.route('/poro', methods=['POST'])
def poro_calc():

  poro_min = request.json['poroMin']
  poro_med = request.json['poroMed']
  poro_max = request.json['poroMax']

  std_value = (poro_max - poro_med) / 3.0

  poro_samples = np.random.normal(loc=poro_med, scale=std_value, size=n)

  # Generate random samples from the triangular distribution for a and b
  hist, bin_edges = np.histogram(poro_samples, bins=50)

  # Create a JSON object with the bin edges and histogram data
  response_data = {
    "labels": [(bin_edges[i] + bin_edges[i+1])/2 for i in range(len(bin_edges)-1)],
    "values": hist.tolist()
  }
 
  return jsonify(response_data)



# Get thickness
@app.route('/heff', methods=['POST'])
def heff_calc():

  heff_min = request.json['heffMin']
  heff_med = request.json['heffMed']
  heff_max = request.json['heffMax']

  heff_samples = np.random.triangular(heff_min, heff_med, heff_max, n)

  # Generate random samples from the triangular distribution for a and b
  hist, bin_edges = np.histogram(heff_samples, bins=50)

  # Create a JSON object with the bin edges and histogram data
  response_data = {
    "labels": [(bin_edges[i] + bin_edges[i+1])/2 for i in range(len(bin_edges)-1)],
    "values": hist.tolist()
  }
 
  return jsonify(response_data)



# Get saturation
@app.route('/sat', methods=['POST'])
def sat_calc():

  sat_min = request.json['satMin']
  sat_med = request.json['satMed']
  sat_max = request.json['satMax']

  std_value = (sat_max - sat_med) / 3.0

  sat_samples = np.random.normal(loc=sat_med, scale=std_value, size=n)

  # Generate random samples from the triangular distribution for a and b
  hist, bin_edges = np.histogram(sat_samples, bins=50)

  # Create a JSON object with the bin edges and histogram data
  response_data = {
    "labels": [(bin_edges[i] + bin_edges[i+1])/2 for i in range(len(bin_edges)-1)],
    "values": hist.tolist()
  }
 
  return jsonify(response_data)



  # Get density
@app.route('/density', methods=['POST'])
def density_calc():

  density_min = request.json['densityMin']
  density_med = request.json['densityMed']
  density_max = request.json['densityMax']

  density_samples = np.random.uniform(low=density_min, high=density_max, size=n)

  # Generate random samples from the triangular distribution for a and b
  hist, bin_edges = np.histogram(density_samples, bins=50)

  # Create a JSON object with the bin edges and histogram data
  response_data = {
    "labels": [(bin_edges[i] + bin_edges[i+1])/2 for i in range(len(bin_edges)-1)],
    "values": hist.tolist()
  }
 
  return jsonify(response_data)



  # Get volume factor
@app.route('/volfactor', methods=['POST'])
def volfactor_calc():

  volfactor_min = request.json['volFactorMin']
  volfactor_med = request.json['volFactorMed']
  volfactor_max = request.json['volFactorMax']

  volfactor_samples = np.random.uniform(low=volfactor_min, high=volfactor_max, size=n)

  # Generate random samples from the triangular distribution for a and b
  hist, bin_edges = np.histogram(volfactor_samples, bins=50)

  # Create a JSON object with the bin edges and histogram data
  response_data = {
    "labels": [(bin_edges[i] + bin_edges[i+1])/2 for i in range(len(bin_edges)-1)],
    "values": hist.tolist()
  }
 
  return jsonify(response_data)


# Get square
@app.route('/square', methods=['POST'])
def square_calc():

  square_min = request.json['squareMin']
  square_med = request.json['squareMed']
  square_max = request.json['squareMax']

  square_samples = np.random.triangular(square_min, square_med, square_max, n)

  hist, bin_edges = np.histogram(square_samples, bins=50)
  # Generate random samples from the triangular distribution for a and b

  # Create a JSON object with the bin edges and histogram data
  response_data = {
    "labels": [(bin_edges[i] + bin_edges[i+1])/2 for i in range(len(bin_edges)-1)],
    "values": hist.tolist()
  }
 
  return jsonify(response_data)


# Get everything
@app.route('/montecarlo', methods=['POST'])
def montecarlo_calc():

  square_min = request.json['squareMin']
  square_med = request.json['squareMed']
  square_max = request.json['squareMax']
  heff_min = request.json['heffMin']
  heff_med = request.json['heffMed']
  heff_max = request.json['heffMax']
  poro_min = request.json['poroMin']
  poro_med = request.json['poroMed']
  poro_max = request.json['poroMax']
  sat_min = request.json['satMin']
  sat_med = request.json['satMed']
  sat_max = request.json['satMax']
  density_min = request.json['densityMin']
  density_med = request.json['densityMed']
  density_max = request.json['densityMax']
  volfactor_min = request.json['volFactorMin']
  volfactor_med = request.json['volFactorMed']
  volfactor_max = request.json['volFactorMax']
  gcos = request.json['gcos']

  square_samples = np.random.triangular(square_min, square_med, square_max, n)
  # hist, bin_edges = np.histogram(square_samples, bins=50)

  heff_samples = np.random.triangular(heff_min, heff_med, heff_max, n)
  # hist, bin_edges = np.histogram(heff_samples, bins=50)

  std_value = (poro_max - poro_med) / 3.0
  poro_samples = np.random.normal(loc=poro_med, scale=std_value, size=n)
  # hist, bin_edges = np.histogram(poro_samples, bins=50)
  
  std_value = (sat_max - sat_med) / 3.0
  sat_samples = np.random.normal(loc=sat_med, scale=std_value, size=n)
  # hist, bin_edges = np.histogram(sat_samples, bins=50)
  
  density_samples = np.random.uniform(low=density_min, high=density_max, size=n)
  # hist, bin_edges = np.histogram(density_samples, bins=50)

  volfactor_samples = np.random.uniform(low=volfactor_min, high=volfactor_max, size=n)
  # hist, bin_edges = np.histogram(volfactor_samples, bins=50)
 
  results = []
  for i in range(s):
    # Calculate the result of the simulation for this iteration
    result = (
        np.random.choice(square_samples, replace=True) *
        np.random.choice(heff_samples, replace=True) *
        np.random.choice(poro_samples, replace=True) *
        np.random.choice(sat_samples, replace=True) *
        np.random.choice(density_samples, replace=True) *
        np.random.choice(volfactor_samples, replace=True) *
        gcos
        )
    results.append(result)
 
  hist, bin_edges = np.histogram(results, bins=50)
 
  # Create a JSON object with the bin edges and histogram data
  response_data = {
    "labels": [(bin_edges[i] + bin_edges[i+1])/2 for i in range(len(bin_edges)-1)],
    "values": hist.tolist()
  }
 
  return jsonify(response_data)


if __name__ == '__main__':
  app.run(debug=True)

  # square_samples = np.random.triangular(square_min, square_med, square_max, n)
  # heff_samples = np.random.triangular(heff_min, heff_med, heff_max, n)
  # sat_samples = np.random.triangular(sat_min, sat_med, sat_max, n)
  # density_samples = np.random.triangular(density_min, density_med, density_max, n)
  # volFact_samples = np.random.triangular(volFact_min, volFact_med, volFact_max, n)
