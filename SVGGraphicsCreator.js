//The last parameter in each method call is determined by height of an individual SVG element and padding between
//Each successive of them. We add 70 as an offset for easily recognizable and understandable label position

createGraphFromMessagesKeywords(spamMessagesFrequenciesCollection,"Naive Bayes Graphical representation for Spams - Keyword tokens and frequency",70);
createGraphFromMessagesKeywords(regularMessagesFrequenciesCollection,"Naive Bayes Graphical representation for Regular Messages - Keyword tokens and frequency",670);
var labelMetaDataForKMeansGraphicalRepresentation = ["K-Means Graphical representation - Values displayed on either axes represent distances from centroid of the clusters corresponding to spam and regular messages data", "Distance From SPAM centroid", "Distance From Regular message centroid"];
createGraphFromKMeansClusteringResults(KMeansClusteringCentroidDistanceData, labelMetaDataForKMeansGraphicalRepresentation, 1270);
var labelMetaDataForNaiveBayesGraphicalRepresentation = ["Naive Bayes Graphical representation - Values displayed on either axes are logarithmic representation of original probability values", "Probability(Message is Spam)", "Probability(Message is not Spam)"];
createGraphFromKMeansClusteringResults(NaiveBayesProbabilityData, labelMetaDataForNaiveBayesGraphicalRepresentation, 1670);