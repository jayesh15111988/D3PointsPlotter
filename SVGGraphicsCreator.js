
createGraphFromMessagesKeywords(spamMessagesFrequenciesCollection);
createGraphFromMessagesKeywords(regularMessagesFrequenciesCollection);

var labelMetaDataForKMeansGraphicalRepresentation = ["K-Means Graphical representation","Distance From SPAM centroid","Distance From Regular message centroid"];
createGraphFromKMeansClusteringResults(KMeansClusteringCentroidDistanceData,labelMetaDataForKMeansGraphicalRepresentation);

var labelMetaDataForNaiveBayesGraphicalRepresentation = ["Naive Bayes Graphical representation - Values displayed on either graph are logarithmic representation of original probability values","Probability(Message is Spam)","Probability(Message is not Spam)"];
createGraphFromKMeansClusteringResults(NaiveBayesProbabilityData,labelMetaDataForNaiveBayesGraphicalRepresentation);