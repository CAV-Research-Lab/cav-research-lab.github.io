import pyautogui as pg
import time

pg.hotkey("command", "t")
time.sleep(0.2)

pg.typewrite("git add .")
time.sleep(0.2)
pg.press("enter")
time.sleep(1)

pg.typewrite('git commit -m "Auto push"')
time.sleep(1)
pg.press("enter")
time.sleep(1)

pg.typewrite("git push")
time.sleep(1.5)

pg.typewrite("CAV-Research-Lab")
time.sleep(0.1)
pg.press("enter")

pg.press("enter")
time.sleep(1.5)

pg.typewrite("npm run deploy")
pg.press("enter")
