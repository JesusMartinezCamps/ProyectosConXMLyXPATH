<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
    <head>
      <style>
        body{background-color:#ede7f6;font-size:1.3vw;text-align:center;}
        table{bgcolor=#3F51B5;text-align:center;border:1px;}
        td,tr,th{border-radius:8px;border:2px solid; border-color: #3F51B5; padding: 4px; vertical-align: top}
      </style>
    </head>
  <body >
  <h2>Examen</h2>
  <table border="1">
    <tr>
      <th>Pregunta</th>
      <th>Opcion</th>
      <th>Respuesta</th>
    </tr>
    <xsl:for-each select="questions/question">
    <tr>
      <td><xsl:value-of select="text"/></td>
      <td>
       <xsl:for-each select="option">
        <xsl:value-of select="position()"/>: <xsl:value-of select="text()"/><br/>
       </xsl:for-each>
      </td>
      <td>
       <xsl:for-each select="answer">
        <xsl:value-of select="text()"/><br/>
       </xsl:for-each>       
      </td>
    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>