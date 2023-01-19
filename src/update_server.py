import os

print("-> Make sure you have npm and git installed before running this script.")
print("-> npm version 9.1.1")
print("-> https://github.com/CAV-Research-Lab/cav-research-lab.github.io.git")

# Update github
os.system("git add .")
os.system("git commit -m \"Automated Update\"")
os.system("git push")

# Update live website
os.system("npm run deploy")
