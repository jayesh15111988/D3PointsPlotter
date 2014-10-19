K-means and Naive bayes data visualization using D3.js
===============

This is an interactive project designed using D3 for graphical visualization of data points collected from SMS messages
<br/>
(Courtesy of SMS data - https://archive.ics.uci.edu/ml/datasets/SMS+Spam+Collection)

<p>
<a href='http://jayeshkawli.com/DataMiningPlots/graphPlotter.html'> Interactive Link </a>
</p>

Following are screenshots of various results obtained in this experiment

1. <b>Naive Bayes Graphical representation for Spams - Keyword tokens and frequency</b>
    <p>
<img src='http://jayeshkawli.com/DMPlotsScreenshot/naiveBayesSpam.png'/>    
</p>
<p>
Individual spam messages are parsed and individual tokens are parsed to get to know the frequency of occurrence of each word in given corpse of spams collection. For example, if there are total 100 keywords and say word 'foo' appears 10 times, then frequency of 'foo' in given data is calculated to be 0.1 and this value is plotted on the x-axis. Since we do not have any comparator Y-value, this value is always constant. <br/><br/>
Also, I calculated how many words have exact same frequency value and this value is then mapped to the radius for each individual circle on the graph
</p>
2. <b>Naive Bayes Graphical representation for Regular Messages - Keyword tokens and frequency</b>
    <p>
<img src='http://jayeshkawli.com/DMPlotsScreenshot/naiveBayesRegularMessage.png'/>    
</p>  
<p>
Same description applies to it as of point 1. Only difference is that this graph is plotted only for messages know to be of non-spam category
</p>

3. <b>K-Means Graphical representation - Values displayed on either axes represent distances from centroid of the clusters corresponding to spam and regular messages data</b>
<p>
<img src='http://jayeshkawli.com/DMPlotsScreenshot/KMeansCentroidDistance.png'/>    
</p>  
<p>
Once model is created, I took the original dataset and ran the algorithm with pre-constructed model on it. Now, I already know labels for all messages and then I make comparison of these labels with those returned by an algorithm. Values on x-axis and y-axis represent distances of given message from centroids of clusters corresponding to spam and regular messages respectively.
Depending on the distances from respective centroids, we categorize given message as either spam or regular one.
</p>

4. <b>Naive Bayes Graphical representation - Values displayed on either axes are logarithmic representation of original probability values</b>
<p>
<img src='http://jayeshkawli.com/DMPlotsScreenshot/NaiveBayesMessagesProbability.png'/>    
</p>
<p>
Same description mentioned in point 3 applies to it. However, bullets shown here represent outcome of Naive Bayes algorithm. Values on x-axis and y-axis represent probability that given message is either spam or regular one respectively. Technically, probability thus calculated is extremely small and thus impossible to map properly on given scale, I have calculated the logarithm (With base 2) of output value of probability for input message statement. Resultant values are then plotted on x and y - axes. <br/><br/>Depending on the calculated probability values, message is either categorized as spam or regular based on the outcome of probability value
</p>
 
