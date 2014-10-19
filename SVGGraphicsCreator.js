createGraphFromMessagesKeywords(spamMessagesFrequenciesCollection,"Naive Bayes Graphical representation for Spams - Keyword tokens and frequency");
createGraphFromMessagesKeywords(regularMessagesFrequenciesCollection,"Naive Bayes Graphical representation for Regular Messages - Keyword tokens and frequency");
var labelMetaDataForKMeansGraphicalRepresentation = ["K-Means Graphical representation - Values displayed on either axes represent distances from centroid of the clusters corresponding to spam and regular messages data", "Distance From SPAM centroid", "Distance From Regular message centroid"];
createGraphFromKMeansClusteringResults(KMeansClusteringCentroidDistanceData, labelMetaDataForKMeansGraphicalRepresentation);
var labelMetaDataForNaiveBayesGraphicalRepresentation = ["Naive Bayes Graphical representation - Values displayed on either axes are logarithmic representation of original probability values", "Probability(Message is Spam)", "Probability(Message is not Spam)"];
createGraphFromKMeansClusteringResults(NaiveBayesProbabilityData, labelMetaDataForNaiveBayesGraphicalRepresentation);