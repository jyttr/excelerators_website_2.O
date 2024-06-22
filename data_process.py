import csv 
import gdown

from google_drive_downloader import GoogleDriveDownloader as gdd

file = open("members.csv" , "r")
output = open("output.txt", "w")
reader = csv.reader(file)

i = 0
data = []
for item in reader:
    print(item)
    # image = gdown.download(item[3],  quiet=False)

    output.write( str( item ) + ",\n" )
    i+=1
output.close()
