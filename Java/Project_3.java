/* A small inheritance project on languages - figures shown are not accurate*/

class Language {
    protected String name;
    protected int numSpeakers;
    protected String regionsSpoken;
    protected String wordOrder;
    
  Language(String lanName, int speakers, String regions, String order) {
    this.name = lanName;
    this.numSpeakers = speakers;
    this.regionsSpoken = regions;
    this.wordOrder = order;
  }
  
  public void getInfo() {
      System.out.println(this.name + " is spoken by " + this.numSpeakers + " people mainly in " + this.regionsSpoken + ".");
      System.out.println("The language follows the word order: " + this.wordOrder);
      }
    
  public static void main (String[] args) {
   Language english = new Language("English", 235000000, "UK, Ireland, USA, Australia", "subject-verb-object");
  english.getInfo();
    
  Mayan Chontal= new Mayan ("Chontal Maya", 37027);
  Chontal.getInfo();
    
  SinoTibetan mandarin = new SinoTibetan ("Mandarin Chinese", 11100000);
    mandarin.getInfo();
    
  SinoTibetan burmese = new SinoTibetan ("Burmese", 4300000);
    burmese.getInfo();
  }
  }
  