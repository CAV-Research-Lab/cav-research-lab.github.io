import os

print("-> Make sure you have npm and git installed before running this script, see github page bellow for more details on setup.")
print("-> npm version 9.1.1")
print("-> https://github.com/CAV-Research-Lab/cav-research-lab.github.io.git\n")

x = input("Commit Message: ")

# Update github
os.system("git pull")
os.system("git add .")
os.system(f"git commit -m \"{x}\"")
os.system("git push")

# Update live website
os.system("npm run deploy")