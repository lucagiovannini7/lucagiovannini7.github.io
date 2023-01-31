import java.util.ArrayList;
import java.util.List;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class LeafletExample {

    public static void main(String[] args) throws ScriptException {
        ScriptEngine engine = new ScriptEngineManager().getEngineByName("javascript");

        // Create a list of cities
        List<String> cities = new ArrayList<>();
        cities.add("New York, NY");
        cities.add("Los Angeles, CA");
        cities.add("Chicago, IL");
        cities.add("Houston, TX");
        cities.add("Phoenix, AZ");

        // Create a Leaflet map
        engine.eval("var map = L.map('map').setView([37.8, -96], 4);");
        engine.eval("L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'}).addTo(map);");

        // Geocode the cities and add markers to the map
        for (String city : cities) {
            engine.eval("var geocoder = L.Control.Geocoder.nominatim();");
            engine.eval("geocoder.geocode('" + city + "', function(results) {var r = results[0]; if (r) {L.marker([r.lat, r.lng]).addTo(map).bindPopup(r.name);}});");
        }
    }
}
