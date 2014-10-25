import csv
#Sample Class to parse python array and dictionary formatted data into csv file for easy processing
frequencyHolder={};
with open('spamMessagesFrequency.csv', 'Ur') as f:
    finalList = list(tuple(rec) for rec in csv.reader(f, delimiter=','))

def writeDictionaryInCSVFile(dictionaryToWrite,fileName):
    with open(fileName, 'w', newline='') as fp:
        CSVFileWriter = csv.writer(fp, delimiter=',')
        for word, frequency in dictionaryToWrite.items():
            CSVFileWriter.writerow([word, frequency]);

for index, individualTuple in enumerate(finalList):
    currentTuple=individualTuple;
    tempList=[];
    if currentTuple[1] in frequencyHolder:
        tempList=frequencyHolder[currentTuple[1]];
        tempList.append(currentTuple[0]);
    else:
        tempList.append(currentTuple[0]);
    frequencyHolder[currentTuple[1]]=tempList;
writeDictionaryInCSVFile(frequencyHolder,"spamMessagesGraphCompliant.csv");

        
