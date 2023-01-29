import java.util.Arrays;
import java.util.List;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class LeafletExample {

    public static void main(String[] args) {
        // Create a ScriptEngine object
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("javascript");

        // Input the list of cities
        List<String> cities = Arrays.asList("New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ");

        try {
            // Create a Leaflet map
            engine.eval("var map = L.map('map').setView([37.8, -96], 4);");
            engine.eval("L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'}).addTo(map);");

            // Geocode the cities and add markers to the map
            for (String city : cities) {
                engine.eval("var geocoder = L.Control.Geocoder.nominatim();");
                engine.eval("geocoder.geocode('" + city + "', function(results) {var r = results[0]; if (r) {L.marker([r.lat, r.lng]).addTo(map).bindPopup(r.name);}});");
            }
        } catch (ScriptException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
